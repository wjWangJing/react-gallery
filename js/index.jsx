;(function(){
    let GalleryApp = React.createClass({
        render : function(){
            return (
                <section className="stageBackground">
                    <section className = "stage">2</section>
                    <nav className = "nav">1</nav>
                </section>
            )
        }
    });
    ReactDOM.render(
        <GalleryApp />,
        document.getElementById("content")
    );
})();