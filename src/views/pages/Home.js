// --------------------------------
//  Define Data Sources
// --------------------------------

let getPostsList = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options)
        return await response.json();

    } catch (err) {
        console.log('Error getting documents', err)
    }
};

let Home = {
    render : async () => {
        let posts = await getPostsList();
        return  /*html*/`
            <section class="login">
                <button id="login_foo" >Login</button>            
            </section>
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${ posts.map(post => 
                        /*html*/`<li><a href="#/p/${post.id}">${post.title}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `;

    }
    , after_render: async () => {

        const btnLogin = document.getElementById('login_foo');

        btnLogin.addEventListener(
            'click',
            async ()=>{
                try {
                    const options = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    };
                    const response = await fetch(
                        `https://5bb634f6695f8d001496c082.mockapi.io/api/posts`,
                        options
                    );

                    const fooPosts = await response.json();
                    fooPosts['_links'] = './views/pages/About.js';

                    console.log(fooPosts);

                    options.headers = null;
                    options.dataType = 'script';
                    options.url = fooPosts._links;

                    //window['routes']['/about'] = $.getScript();

                    let ahabout = document.createElement('a');
                    ahabout.href='/#/about';
                    ahabout.text='About';

                    document.querySelector('div.navbar-start').parentNode.insertBefore(
                        ahabout,
                        document.querySelector('div.navbar-start')
                    );

                } catch (err) {
                    console.log('Error getting documents', err)
                }
            }
        );
    }

};

export default Home;