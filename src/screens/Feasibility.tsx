import { useApp } from '../state';
import { FullRibbon } from '../components/TimeRibbon';
import { reasoningLines } from '../lib/feasibility';
import { formatClock } from '../lib/format';

export function Feasibility() {
  const { state, currentResult, back, commit, decline } = useApp();
  const { stall, walkOutMin, queueMin, eatMin, walkBackMin, spareMin, leaveAt, backAt, feasible } = currentResult;
  const [line1, line2] = reasoningLines(currentResult);

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll" style={{ gap: 0 }}>
        <button type="button" onClick={back} className="btn-back">← {stall.centreName} {stall.unit}</button>

        <div className="display" style={{ marginTop: 14, fontSize: 34, lineHeight: 0.96 }}>
          LEAVE AT {formatClock(leaveAt)},
          <br />
          BACK BY {formatClock(backAt)}.
        </div>

        <div style={{ marginTop: 24 }}>
          <FullRibbon
            leaveTime={formatClock(leaveAt)}
            meetingLabel={`${formatClock(state.nextCommitmentAt)} meeting`}
            walk={walkOutMin}
            queue={queueMin}
            eat={eatMin}
            walkBack={walkBackMin}
            spare={Math.max(spareMin, 0)}
            backAtLabel={`Back at ${formatClock(backAt)}`}
            footNote={`Queue estimate ${queueMin} min, ${stall.centreName} ${stall.unit}`}
          />
          {!feasible && (
            <div className="mono" style={{ marginTop: 8, fontSize: 12, color: '#DC2626' }}>
              That's {Math.abs(spareMin)} min after your {formatClock(state.nextCommitmentAt)} meeting.
            </div>
          )}
        </div>

        <div style={{ marginTop: 26, paddingTop: 20, borderTop: '1px solid #F0E2CC', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="check-dot">✓</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>{line1}</div>
              <div className="mono" style={{ marginTop: 4, fontSize: 11, color: '#6E5C41' }}>
                {walkOutMin} min each way · {stall.centreName}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="check-dot">✓</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>{line2}</div>
              <div className="mono" style={{ marginTop: 4, fontSize: 11, color: '#6E5C41' }}>
                {stall.seatingType} · {stall.address}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="screen-footer">
        <button type="button" onClick={commit} className="btn-cta">I&rsquo;ll go</button>
        <button type="button" onClick={decline} className="btn-quiet">Not today</button>
      </div>
    </div>
  );
}
