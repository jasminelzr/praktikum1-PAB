// CLass component
class Tombol extends React.COmponent {
    handleButtonCLick = () => {
        alert(this.props.pesan);
    }

    render() {
        return (
            <button onClick={this.handleButtonClick} style={{margin:"10px"}}>
                {this.props.children}
            </button>
        )
    }
}

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Pengenalan React Tingkat Dasar</h1>
                <Tombol pesan="Belajar React">React</Tombol>
                <Tombol pesan="Belajar Javascript">Javascript</Tombol>
            </div>
        )
    }
}
// functional component
// // Button Component
// const MyButton = (props) => {
//     const handleButtonClick = () => {
//         alert(props.message);
//     }

//     return (
//         <button onClick={handleButtonClick} style={{ margin: "10px" }}>
//             {props.children}
//         </button>
//     );
// }
// // App Component
// const MyApp = () => {
//     return (
//         <div>
//             <h1>Learn React</h1>
//             <MyButton message="Learn React">React</MyButton>
//             <MyButton message="Learn JavaScript">JavaScript</MyButton>
//         </div>
//     );
// }

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);