import { useState } from "react";

export default function Ex1() {

    const x= Math.random();
    const arr = ["루피", "조로", "상디"];
    // 일반변수가 아닌 상태변수
    // 상태변수의 setter가 호출되면 컴포넌트 렌더링된다.
    const[count, setCount] = useState(0);

    function show(){
        alert('주의');
    }
    // return 밖에선 if, for, forEach 사용가능

    return (
        <div>
            <h1>Ex1</h1>
            <div>count:{count}</div>
            <button onClick={()=>{
                        // count = count + 1
                        setCount(count+1)
                }}>증가</button>

            {/* 조건문 (삼항연산자)*/}
            <div>
                {
                    x > 0.6 ? <span>대</span> : (x > 0.3 ? <span>중</span> : <span>소</span>)
                }
            </div>

            {/* 반복문 map메서드를 사용*/}
            <div>
                {
                    arr.map((name, index) => (<div key={index}>{name}</div>))
                }
            </div>
            
            <button onClick={show}>주의</button>
            <br/>
            <button onClick={()=>{alert('주의2')}}>주의2</button>
        </div>
    )
}
