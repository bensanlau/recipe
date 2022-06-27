import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <d4l-card classes="card--round-corners-l card--text-center">
        <div slot="card-header">
          <h2>What's in my fridge?</h2>
          <p>Let's find a recipe you can cook with.</p>
        </div>
        <div slot="card-content">
        </div>

      </d4l-card>
    );
  }
}
