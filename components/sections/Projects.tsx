import Section from "../layout/Section";

export default function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      <h3>Cross-Chain Portfolio Dashboard</h3>
      <p>
        Unified fragmented wallet data into a single view for faster
        decision-making and reduced support volume.
      </p>
      <ul>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Ethers.js</li>
        <li>Indexing API</li>
      </ul>
      <h3>Smart Contract Deployment Console</h3>
      <p>
        Standardized deployments across environments to improve release safety
        and traceability.
      </p>
      <ul>
        <li>React</li>
        <li>Solidity</li>
        <li>Hardhat</li>
        <li>PostgreSQL</li>
      </ul>
      <h3>High-Traffic Onboarding Flow</h3>
      <p>
        Reduced drop-off by simplifying key flows and improving perceived
        performance.
      </p>
      <ul>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Feature Flags</li>
        <li>Analytics</li>
      </ul>
    </Section>
  );
}
