import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPostAC } from "../redux/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!!title.trim().length) {
      const { createPostAC } = this.props;

      const newPost = {
        title,
        id: Date.now().toString()
      }

      createPostAC(newPost);

      this.setState({ title: '' });
    }
  }

  changeTitle = (e) => {
    e.persist();
    this.setState((prevState) => ({
      title: e.target.value
    }));
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.submitHandler}>

        <div class="form-group">
          <label for="title">Заголовок поста</label>
          <input type="text" className="form-control" id="title" value={title} onChange={this.changeTitle} />
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    )
  }
}

export default connect(null, { createPostAC })(PostForm);