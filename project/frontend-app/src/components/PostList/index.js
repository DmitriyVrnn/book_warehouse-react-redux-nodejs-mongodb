import React from 'react'
import {connect} from 'react-redux'
import Post from '../Post'
import {deletePost} from "../../actions/post";

function PostList({ posts, onDelete, author}) {
    if(!posts.length) {
        return (
            <div>
                Сообщения отсутствуют
            </div>
        )
    }

    {console.log(`Имя твое - 1: ${author}`)}

    return (
        <div>
            {posts.map(post => {
                return (
                    <Post post={ post } author={author} onDelete={ onDelete } key={ post._id }/>
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

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deletePost(id));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostList);
