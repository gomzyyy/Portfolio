import "./server-off.css";
import { ServerOffLabel, ServerOffIssues, ServerOffFixes } from "../../assets/data";

const ServerOff = () => {
  return (
    <div className="server-off">
      <span className="serverOff-label">{ServerOffLabel}</span>
      <div className="problems">
      <label htmlFor="serverOff_issues" className="server-off-label">Problems:</label>
      <ul className="serverOff-issues" id="serverOff_issues" >
        <li className="issue">{ServerOffIssues[0]}</li>
        <li className="issue">{ServerOffIssues[1]}</li>
        <li className="issue">{ServerOffIssues[2]}</li>
      </ul>
      </div>
      <br />
      <div className="solutions">
      <label htmlFor="serverOff_fixes" className="server-off-label">Solutions:</label>
      <ul className="serverOff-fixes" id="serverOff_fixes" >
        <li className="fixes">{ServerOffFixes[0]}</li>
        <li className="fixes">{ServerOffFixes[1]}</li>
      </ul>
      </div>
    
    </div>
  );
};
export default ServerOff;
