import { useApp } from '../state';
import { FullRibbon } from '../components/TimeRibbon';

export function Feasibility() {
  const { back, commit, decline } = useApp();

  return (
    <div className="screen" style={{ overflow: 'hidden' }}>
      <div className="screen-scroll" style={{ gap: 0 }}>
        <button type="button" onClick={back} className="btn-back">← Amoy Street 01-32</button>

        <div className="display" style={{ marginTop: 14, fontSize: 34, lineHeight: 0.96 }}>
          LEAVE AT 12:18,
          <br />
          BACK BY 12:52.
        </div>

        <div style={{ marginTop: 24 }}>
          <FullRibbon
            leaveTime="12:18"
            meetingLabel="1:00 meeting"
            walk={6}
            queue={7}
            eat={15}
            walkBack={6}
            spare={8}
            backAtLabel="Back at 12:52"
            footNote="Queue read 12:04, Amoy 01-32"
          />
        </div>

        <div style={{ marginTop: 26, paddingTop: 20, borderTop: '1px solid #F0E2CC', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="check-dot">✓</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>
                Six minutes each way, sheltered the whole way. You&rsquo;ll usually walk ten, but it&rsquo;s 33° and hazy, so today ten is too far.
              </div>
              <div className="mono" style={{ marginTop: 4, fontSize: 11, color: '#6E5C41' }}>6 min · today&rsquo;s walk sits at 6 · 33°</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="check-dot">✓</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14.5, lineHeight: 1.45 }}>
                Fan-cooled is fine here — the walk is covered and you&rsquo;re back eight minutes early, which is enough to cool down before the client at 2:00.
              </div>
              <div className="mono" style={{ marginTop: 4, fontSize: 11, color: '#6E5C41' }}>Fan-cooled · sheltered · client 2:00 PM</div>
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
