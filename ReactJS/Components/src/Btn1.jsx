let Btn1=(props)=>{
    let {label, cname, sty}=props
    return(<button className={cname} style={sty}>{label}</button>)
}
export default Btn1