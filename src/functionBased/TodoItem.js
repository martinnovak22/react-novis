import React from "react";
import styles from "./TodoItem.module.css";
import Button from "react-bootstrap/Button";
import { FormCheck } from "react-bootstrap";

class TodoItem extends React.Component {
  state = { editing: false };
  handleEditing = () => {
    this.setState({ editing: true });
  };
  handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  };
  componentWillUnmount() {
    console.log("Cleaningup...");
  }
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { id, title } = this.props.todo;
    let viewMode = {};
    let editMode = {};
    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <FormCheck
            aria-label="option 1"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
            style={{ float: "left", marginRight: "15px", marginTop: "5px" }}
          ></FormCheck>
          <Button
            variant="danger"
            style={{ float: "right", backgroundColor: "lightcoral" }}
            onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
          >
            Delete
          </Button>
          <span
            className={styles.info}
            style={this.props.todo.completed ? completedStyle : null}
          >
            {this.props.todo.title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}
export default TodoItem;
