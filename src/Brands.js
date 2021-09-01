import { useState } from 'react';
import React from 'react';
import { Vote } from "./vote";
import TextField from '@material-ui/core/TextField';

export function Brands() {
  const brand = [{
    id: 1,
    name: "samsung",
    logo: "https://www.designbust.com/download/566/thumb/samsung_logo_icon_thum.png",
    model: 'ultra',
    specs: {
      os: "android",
      ram: "8gb"
    }
  },
  {
    id: 2,
    name: "apple",
    logo: "https://cdn.imgbin.com/8/23/8/imgbin-apple-logo-podcast-apple-D3LhZM2vKHqiXB4SY3Wyc6TTg.jpg",
    model: "12pro",
    specs: {
      os: "IOS",
      ram: "8gb"
    }
  },
  {
    id: 3,
    name: "MI",
    logo: "https://www.searchpng.com/wp-content/uploads/2019/07/Mi-Icon-PNG-715x715.jpg",
    model: "note 9 ",
    specs: {
      os: "android",
      ram: "8gb"
    }
  },
  {
    id: 4,
    name: "oppo",
    model: "z10 ",
    logo: "https://dominiontx.com/wp-content/uploads/2017/12/Oppo-Logo-PNG.png",
    specs: {
      os: "android",
      ram: "8gb"
    }
  },
  {
    id: 5,
    name: "asus",
    logo: "https://p1.hiclipart.com/preview/533/930/428/logos-01-icons-and-asus-512-asus-logo-png-clipart.jpg",
    model: "gamer X",
    specs: {
      os: "android",
      ram: "8gb"
    }
  },
  {
    id: 6,
    name: "VIVO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vivo_mobile_logo.png/800px-Vivo_mobile_logo.png",
    model: "note 8 ",
    specs: {
      os: "android",
      ram: "8gb"
    }
  }];
  // const [color, setcolor] = useState('red');
  const [search, setsearch] = useState('');
  // return(
  // 
  // );
  return (
    <div className="searchbrand">
      {/* <input value={color} style={{background: color}}
            onChange={(event)=>setcolor(event.target.value)}
            type="text" placeholder="search" /> */}
            <TextField type="text" value={search}
          onChange={(event) => setsearch(event.target.value)}
          placeholder="search" variant="outlined" label="name" />
            {/* <input type="text" value={search}
          onChange={(event) => setsearch(event.target.value)}
          placeholder="search" />{search} */}
      <div className="maindiv">
        {/* <input value={color} style={{background: color}}
              onChange={(event)=>setcolor(event.target.value)}
              type="text" placeholder="search" />{color} */}
        
        {brand.filter((brand) => brand.model.includes(search.toLocaleLowerCase()))
          .map(brand => <Vote
            key={brand.id}
            brandName={brand.name}
            model={brand.model}
            specs={brand.specs}
            logo={brand.logo} />)}
        {/* <Vote brandName="samsung" model="s21 ultra"/>
            <Vote brandName="apple"model="12pro"/>
            <Vote brandName="MI" model="note 11"/>
            <Vote brandName="oppo" model=" note ultra"/> */}

      </div>
    </div>
  );
}
