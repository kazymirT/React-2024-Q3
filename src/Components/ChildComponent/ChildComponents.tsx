import React from 'react';
import { ChildrenContentProps } from '../../type/type';

export default class ChildComponent extends React.Component<ChildrenContentProps> {
  render(): React.ReactNode {
    return (
      <div>
        <img
          src={this.props.data.image}
          width={300}
          height={300}
          alt={this.props.data.name}
        />
        <h2>{this.props.data.name}</h2>
      </div>
    );
  }
}
