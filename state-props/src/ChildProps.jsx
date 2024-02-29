const ChildProps = ({ data, updateCount, countIncre}) => {

    return (
        <>
            <p>Child Props Component</p>
            <button type="button" onClick={() => updateCount(countIncre + 1)}>ADD COUNT</button>
            {
                data.map((list) => {
                    console.log(list, 'list');
                    return (
                        <div key={list.id}>
                            <p>id: {list.id}</p>
                            <p>name: {list.name}</p>
                            <p>age: {list.age}</p>
                            <p>grade: {list.grade}</p>
                            <p>city: {list.city}</p>
                        </div>
                    );
                })
            }
        </>
    )
}

export default ChildProps;