import TypeSelectButton from './TypeSelectButton';


const TypeSelect = ({selectEntreeType, course, menu}) => {

    const courseFilter = menu.filter(itemFilter => itemFilter.course === course)
    const typeArray = courseFilter.map(typeArr => typeArr.type)
    const uniqType = [...new Set(typeArray)]

    return (
        <div className="jumbotron bg-secondary text-center">
            <div className="container">
                <div className="ht-tm-header">
                    <h3 className="display-3">{`${course} Selections`}</h3>
                    <span className="lead text-primary">{`Select what kind of ${course.toLowerCase()} you would like and add any that look appetizing to your meal plan. You can always remove them later.`}</span>
        
                    <div className="mt-4">

                        { uniqType.map(type => 
                            <TypeSelectButton 
                                key={type} 
                                type={type} 
                                selectEntreeType={selectEntreeType} 
                            /> )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TypeSelect