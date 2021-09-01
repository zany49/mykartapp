import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Specification } from './Specification';

export function Vote({brandName,model,specs,logo}){

    const [opened,setOpened]=useState(false);
    const [like, setLike] = useState(0);
    const [dlike, setdLikes] = useState(0);
    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = ()=> setdLikes(dlike + 1);
    // console.log("props",props)
    return (
      <div className="App">
         {/* style={{background:like>=dlike?"linear-gradient(0deg, rgba(107,195,34,1) 0%, rgba(56,253,45,1) 100%)":"linear-gradient(90deg, rgba(175,44,104,1) 0%, rgba(253,32,29,0.9556197478991597) 66%)"} */}
        
        <h1 className="name">
          {brandName}
        </h1>
        <img className="logo" src={logo}></img>
        <h4 id="model">{model}</h4>
       
        <IconButton aria-label="like" onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">
        👍
  </Badge>
        </IconButton>
        <IconButton aria-label="dislike" onClick={incrementDisLike}>
        <Badge badgeContent={dlike} color="error">
        👎
  </Badge></IconButton>
  
  
  
        <Button
        onClick={()=>setOpened(!opened)} 
        variant="outlined" color="primary">
        Show{opened? " less":" more"}
        
        </Button>
  
        {opened ? <Specification specs={specs}/> : ""}
  
        
         
        
        
      </div>
    );
  }
