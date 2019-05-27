import React from 'react'
import {connect} from 'react-redux'
import Post from '../Post'
import {deletePost} from "../../actions/post";

const PostList = ({posts, deletePost, author, date}) => {
    if (!posts.length) {
        return (
            <div>
                Сообщения отсутствуют
            </div>
        )
    }

    return (
        <div className={"post-list"}>
            {posts.map(post => {
                return (
                    <Post post={post} author={author} date={date} onDelete={deletePost} key={post._id}/>
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    };
};

/*const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deletePost(id));
        },
    };
};*/

export default connect(
    mapStateToProps,
    {deletePost},
)(PostList);
