import { Link } from 'react-router-dom';

const CourseSelectButton = ({ course }) => {

    return (
        <Link to={`/${course}`}>
            <button 
                className="btn btn-primary btn-sm m-2"
                onClick={null} >
                <span value="type">{`${course}`}</span>
            </button>
        </Link>
    )
}

export default CourseSelectButton