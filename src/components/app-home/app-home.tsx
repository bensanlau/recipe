import { Component, h, State } from '@stencil/core';
import { SUGGESTIONS } from '../../global/constants';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppRoot {
  @State() items: Array<string> = [];

  handleTag(event: Event) {
    console.log(event.target);
  }

  renderSuggestions() {
    if (SUGGESTIONS) {
      return (<div class="suggestions">
        <h4>Quick suggestions</h4>
        <ul>{Object.keys(SUGGESTIONS).map((item) => 
          <li><d4l-tag text={item} classes='suggestions__tag' handleClick={this.handleTag}/></li>
        )}</ul>
      </div>);
    }
  }

  renderList() {
    if (this.items.length) {
      return (
        <div>
          <ul class="search-list">
            {this.items.map((item) => <li>{item}</li>)}
          </ul>
          <d4l-button text='Submit' />
        </div>
      )
    } else {
      return 'Your list is empty. Please enter or select ingredients from the left ←.'
    }
  }

  render() {
    return (
      <d4l-card classes="card--round-corners-l card--text-center">
        <div slot="card-header">
          <h2>What's in my fridge?</h2>
          <p>Let's find a recipe you can cook with.</p>
        </div>
        <div slot="card-content">
          <div class="search">
            <div class="search-input">
              <d4l-input
                id="search"
                placeholder='Enter an ingredient'
                label=''
              />
              <d4l-button classes='button--secondary' text='Add to list →' />
            </div>

            {this.renderSuggestions()}

            <div class="search-params">
              <h3>Your list</h3>
              <div class="search-list">
                {this.renderList()}
              </div>
            </div>
          </div>
        </div>
      </d4l-card>
    );
  }
}
