function Sample(){
    return(
        <>
        <SkipComponent/>
        <WrapComponent/>
        </>
    )
}

// Skip
class SkipComponent extends React.Component{
    render(){
        return(
            <>
            <ul className="skip">
                <li><a href="#main_image">콘텐츠바로가기</a></li>
            </ul>
            </>
        );
    }
}

//Wrap
class WrapComponent extends React.Component{
    render(){
        return(
            <>

            <MainComponent/>

            </>
        );
    }
}

//main
class MainComponent extends React.Component {
    render(){
        return(
            <>

            <div id="main_image">
                <ul>
                    <li><img src="img/full1.png" alt="img1"/></li>
                    <li><img src="img/full2.jpg" alt="img2"/></li>
                    <li><img src="img/full1.png" alt="img1"/></li>
                    <li><img src="img/full2.jpg" alt="img2"/></li>
                </ul>

                <div id="arrow">
                    <a className="prev" href="#" onclick="return false"><img src="img/arrow_l1.png" alt="이전"/></a>
                    <a className="next" href="#" onclick="return false"><img src="img/arrow_r1.png" alt="다음"/></a>
                </div>
            </div>
            <ul id="book_roll">
                <li id="btn0"><a href="img/img1.jpg"><img className="firstactive" src="img/state_over.png" alt="활성"/></a></li>
                <li id="btn1"><a href="img/img1.jpg"><img className="secondactive" src="img/state_out.png" alt="비활성"/></a></li>
                <li id="btn2"><a href="img/img1.jpg"><img className="secondactive" src="img/state_out.png" alt="비활성"/></a></li>
                <li id="btn3"><a href="img/img1.jpg"><img className="secondactive" src="img/state_out.png" alt="비활성"/></a></li>
            </ul>
            </>
        );
    }
}

ReactDOM.render(
    <Sample/>,
    document.getElementById("root")
);