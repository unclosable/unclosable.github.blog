var $ = require('jquery');
var React = require('react');
var client = require('./client.js');
var ReactDOM = require('react-dom');

var TodoList = React.createClass({
    render: function() {
        var createItem = function(item, key) {
            return <li key={key} className="message">
                <p className="itemTitle">
                    {item.editor}
                    <font className="said">said</font>
                </p>
                <p className="itemContent">{item.content}</p>
            </li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
var TodoApp = React.createClass({
    getInitialState: function() {
        return {items: this.props.items, editor: '', content: '', messageSender: this.props.messageSender};
    },
    onEditorChange: function(e) {
        this.setState({editor: e.target.value});
    },
    onContentChange: function(e) {
        this.setState({content: e.target.value});
    },
    addNewMessage: function(data) {
        var nextItems = this.state.items.concat([
            {
                editor: data.editor,
                content: data.content
            }
        ]);
        var nextText = '';
        this.setState({items: nextItems, editor: nextText, content: nextText});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var data = {
            editor: this.state.editor,
            content: this.state.content
        };
        this.state.messageSender(data);
        var nextItems = this.state.items.concat([
            {
                editor: this.state.editor,
                content: this.state.content
            }
        ]);
        var nextText = '';
        this.setState({items: nextItems, editor: nextText, content: nextText, messageSender: this.state.messageSender});
    },
    render: function() {
        return (
            <div>
                <h3 className="messageTitle">留言板</h3>
                <TodoList items={this.state.items}/>
                <form className="messageForm">
                    <table>
                        <tbody>
                            <tr>
                                <td className="firstInput">留言ID:</td>
                                <td><input onChange={this.onEditorChange} value={this.state.editor} className="titleInput"/></td>
                            </tr>
                            <tr>
                                <td>留言内容:</td>
                                <td><textarea onChange={this.onContentChange} value={this.state.content} className="contentInput"/></td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="buttonTd">
                                    <button onClick={this.handleSubmit}>{'添加评论'}</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
});

var messageSender = client.messageSender;
var todoApp = ReactDOM.render(
    <TodoApp items={[]} messageSender={messageSender}/>, $("#mountNode")[0]);
//注册收到信息的事件
var addMessage = function(data) {
    if (data.editor && data.content) {
        todoApp.addNewMessage({editor: data.editor, content: data.content});
    }
}
client.addMessageActor(addMessage);
