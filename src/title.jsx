import './title.css'                    /*導入 */
function Title() {                      {/*組件 */}
    return <div className="browse">
        
        <div className='title' >       {/*區塊 */}
        <a>旅遊網</a>                   {/*文本*/ }
        </div>
        <div className='options'>
            <a >選項一</a>
            <a >選項二</a>
            <a >選項三</a>
        </div>
    </div>
}



export default Title;               /*導出 */