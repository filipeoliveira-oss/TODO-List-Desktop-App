import BellSVG from '../../assets/svg/BellSvg'
import FolderSVG from '../../assets/svg/FolderSvg'
import SaveSVG from '../../assets/svg/SaveSvg'
import SettingsSVG from '../../assets/svg/SettingsSvg'
import './Header.css'

export default function Header(){
    return(
        <div className='HeaderContainer'>
            <div className="HeaderFileActions">
                <button><FolderSVG/></button>
                <button><SaveSVG/></button>
            </div>

            <div className="HeaderFilters">
                <button>To do: ()</button>
                <button>Done: ()</button>
            </div>

            <div className="HeaderConfigsActions">
                <button><BellSVG/></button>
                <button><SettingsSVG/></button>
            </div>
        </div>
    )
}