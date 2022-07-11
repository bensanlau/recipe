import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-listing',
  // styleUrl: 'app-home.css',
})
export class AppListing {
  render() {
    return (
      <d4l-card classes="card--round-corners-l card--text-center">
        <div slot="card-header">
          <h2>Lisitngs</h2>
        </div>
        <div slot="card-content">
          This is growing up
        </div>
      </d4l-card>
    );
  }
}
