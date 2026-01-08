import Section from "../layout/Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <h3>Frontend Engineering</h3>
      <ul>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>State Management</li>
        <li>Accessibility</li>
      </ul>
      <h3>Web3 Engineering</h3>
      <ul>
        <li>Solidity</li>
        <li>Ethers.js</li>
        <li>Wallet Integrations</li>
        <li>Smart Contract Auditing</li>
      </ul>
      <h3>Platform & Delivery</h3>
      <ul>
        <li>CI/CD</li>
        <li>Testing</li>
        <li>Performance Optimization</li>
        <li>Monitoring</li>
      </ul>
    </Section>
  );
}
