import { Component, h, State, Prop } from '@stencil/core';
import { SUGGESTIONS } from '../../global/constants';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppRoot {
  @Prop() history: RouterHistory;
  @State() items: Array<string> = [];

  handleTag(item: string) {
    const list = [...this.items, item];
    this.items = list;
  }

  renderSuggestions() {
    if (SUGGESTIONS) {
      return (
        <div class="suggestions">
          <h4>Quick suggestions</h4>
          <ul>{Object.entries(SUGGESTIONS).map(([icon, item]) =>
            <li><d4l-tag text={`${icon} ${item}`} classes='suggestions__tag' handleClick={() => this.handleTag(item)}/></li>
          )}</ul>
        </div>
      );
    }
  }

  get suggestedRecipes() {
    // await

    return 'foo';
    // try {
    //   let response = await fetch('https://someapi.com/data');
    //   if (!response.ok) {
    //     throw new Error(response.statusText);
    //   }
    //   let json = await response.json();
    // } catch (err) {
    //   console.log(err);
    // }
  }

  submitList() {
    // example: https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2
    // https://api.spoonacular.com/recipes/findByIngredients?apiKey=9ee43fd60989499b8a55d5debb42e5ef&ingredients=
    console.log(this.items);
    let ingredients = this.items.join(',+').toLowerCase();

    console.log(this.suggestedRecipes);
    // this.history.push(`/results`);
  }

  renderList() {
    if (this.items.length) {
      return (
        <div>
          <ul class="search-list">
            {this.items.map((item) => <li>{item}</li>)}
          </ul>
          <d4l-button text='Submit' onClick={() => this.submitList()} />
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
