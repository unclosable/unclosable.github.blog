var ClickTitleChild=React.createClass({
  render:function(){
    return (<span className="octicon octicon-link">{this.props.theHrefText}</span>);
  }
});
var ClickTitle = React.createClass({
  render:function(){
    return (<a id="unclosablegithubio" className="anchor" href={this.props.thehref} aria-hidden="true">
      <ClickTitleChild theHrefText={this.props.theHrefText}/></a>);
  }
});
var Title = React.createClass({
  render:function(){
    return (<h1>
      <ClickTitle theHrefText={this.props.theHrefText} thehref={this.props.thehref}/>
      {this.props.titlsText}
      </h1>);
  }
});
var Content = React.createClass({
  render:function(){
    var texts=this.props.contentText;
    return (
      <div>{texts.map(function(text){return <p>{text}</p>})}</div>
      );
  }
});
var Section = React.createClass({
  render:function() {
    return (<section id="main_content" className="inner">
      <Title  theHrefText={this.props.theHrefText} thehref={this.props.thehref} titlsText={this.props.titlsText}/>
      <Content contentText={this.props.contentText}/>
      </section>);
  }
});
$.get("data/content.json", function(result) {
  ReactDOM.render(
    <div>
    {
      result.map(function (r) {
        return <Section theHrefText={r.theHrefText} thehref={r.thehref} titlsText={r.titlsText} contentText={r.contentText} />
      })
    }</div>,$("#main_content_wrap")[0]
    );
});