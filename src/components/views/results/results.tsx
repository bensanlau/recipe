import { Component, h } from '@stencil/core';

@Component({
  tag: 'i-results',
  shadow: false,
})
export class Results {
  render() {
    return (
      <d4l-card classes="card--round-corners-l">
        <div slot="card-header">
          <h2>Results</h2>
        </div>
        <div slot="card-content">
          Foobar
        </div>
      </d4l-card>
    )
  }
}
