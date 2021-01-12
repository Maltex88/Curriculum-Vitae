import React from 'react';

export const StackData = props => (
  <div>
    {props.Features.length ? <Features Features={props.Features} /> : ''}
    {props.Frameworks.length ? (
      <Frameworks Frameworks={props.Frameworks} />
    ) : (
      ''
    )}
    {props.Others.length ? <Others Others={props.Others} /> : ''}
  </div>
);

const Features = props => (
  <ul>
    <h3>Features</h3>
    {props.Features.map(x => (
      <li key={x}>{x}</li>
    ))}
  </ul>
);
const Frameworks = props => (
  <ul>
    <h3>Frameworks</h3>
    {props.Frameworks.map(x => (
      <li key={x}>{x}</li>
    ))}
  </ul>
);
const Others = props => (
  <ul>
    <h3>Others</h3>
    {props.Others.map(x => (
      <li key={x}>{x}</li>
    ))}
  </ul>
);
