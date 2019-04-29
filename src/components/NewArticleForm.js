import React, { Component } from 'react';

class NewArticleForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }

  _submitArticle = async () => {
    const { title, description } = this.state;
    console.log(title);
  };

  render() {
    return (
      <section className="site-section pt-5">
        <div className="container">
          <form>
            <div className="row">
              <div className="col">
                <label htmlFor="formGroupExampleInput">Article Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="col">
                <label htmlFor="formGroupExampleInput">Article Photo</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="customFileLang" />
                  <label className="custom-file-label" htmlFor="customFileLang">
                    Your Photo here
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
              />
            </div>
          </form>
          <button className="btn btn-primary" onClick={() => this._submitArticle()}>
            Submit
          </button>
        </div>
      </section>
    );
  }
}

export default NewArticleForm;
