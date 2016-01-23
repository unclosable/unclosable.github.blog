import Section from "./myComponent";

$.get("data/content.json", function(result) {
  ReactDOM.render(
    <div>
    {
      result.map(function (r) {
        return <Section theHrefText={r.theHrefText} thehref={r.thehref} titlsText={r.titlsText} contentText={r.contentText} />
      })
    }</div>,document.getElementById('main_content_wrap')
    );
});