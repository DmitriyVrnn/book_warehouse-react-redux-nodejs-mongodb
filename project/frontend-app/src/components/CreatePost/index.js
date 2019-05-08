import {connect} from 'react-redux'
import {createPost, fetchAllPosts} from "../../actions/post";
import NewPost from '../NewPost'

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => {
            dispatch(createPost(post))
        },
        allPosts: posts => {
            dispatch(fetchAllPosts(posts))
        }
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
