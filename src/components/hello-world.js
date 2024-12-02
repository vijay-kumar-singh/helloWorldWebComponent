class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = `
      <style>
        :host {
          display: block;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .container {
          background-color: #f0f0f0;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
        }
        h1 {
          color: #333;
          margin: 0;
        }
      </style>
      <div class="container">
        <h1>Hello, world!</h1>
      </div>
    `;
    
    this.shadowRoot.innerHTML = template;
  }
}

// Define the custom element
customElements.define('hello-world', HelloWorld);

// Export the class for documentation purposes
export { HelloWorld };