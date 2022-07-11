import { Component, h } from '@stencil/core';

@Component({
  tag: 'i-imprint',
  shadow: false,
})
export class Imprint {
  render() {
    return (
      <d4l-card classes="card--round-corners-l">
        <div slot="card-header">
          <h2>Imprint</h2>
        </div>
        <div slot="card-content">
          <p><strong>D4L data4life gGmbH</strong><br />
          Charlottenstraße 109<br />
          14467 Potsdam<br />
          Germany</p>
          <p>Phone: <a href="tel:+4933198229981">+49 331 98229981</a><br />
          Email: <a href="mailto:&#119;&#x65;&#x40;&#100;&#97;&#x74;&#x61;&#52;&#108;&#105;&#102;&#x65;&#x2e;&#x63;&#97;&#x72;&#x65;">we@data4life.care</a></p>
          <p>Managing Director: Christian-Cornelius Weiß<br />
          Registration Court: Amtsgericht Potsdam<br />
          Register No.: HRB 3066</p>
          <p>Responsible for the content pursuant to § 55 para. 2 of the German Interstate Broadcasting Treaty:</p>
          <p>D4L data4life gGmbH, address as above</p>      
        </div>
      </d4l-card>
    )
  }
}
