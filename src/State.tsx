import React, { Component } from 'react'


interface IState {
  count: number;
}

export default class State extends Component<{}, IState> {
  state: IState = {
    count: 1,
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleAdd2 = () => {
    // 此处就会造成问题，数据虽然更新了，但是因为
    this.state.count = this.state.count + 1
  }

  render() {
    const { count } = this.state
    return (
      <>
        {count}
        <br />
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleAdd2}>直接赋值</button>
      </>
    )
  }
}

