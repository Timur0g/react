import render_react_dom from "./render.js";

const props = {
    messages: 'Yoyoyoy',
    posts: [],
    text_area: '',
    add_post: function (text) {
        const json = {id: this.posts.length + 1, text: text}
        this.posts.unshift(json);
        render_react_dom();
    },
    change_text_area: function (text) {
        this.text_area = text;
        console.log(text);
    }
};

export default props;

