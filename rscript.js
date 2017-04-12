
//console.log(localStorage['_c0d0er_recipes'])
let data = (localStorage['_c0d0er_recipes']) ? JSON.parse(localStorage['_c0d0er_recipes']) : [
  {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
  {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
  {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
];

const localdata = () => {
  localStorage.setItem('_c0d0er_recipes', JSON.stringify(data));
  return JSON.parse(localStorage['_c0d0er_recipes']);
}

let ti = '';//edit title area value;
let te = '';//edit ingredients area value;
let addTit =''; //title textarea value under add;
let addIng = '';// ingredients textarea value under add;

const Footer = (props) => {
  return (
        <footer>
      <p>Coded by <a className='bill' href='http://codepen.io/c0d0er/'>Bill</a></p>
      </footer>
  );
};

const List = (props) => {

  let lnodes = props.name.map((val, ind) => {
    return (
    <h4 className='list'>{val}</h4>
    );    
  })
  return (
    <div className='ing ing1'>
    {lnodes}
    <button type='button' id='delBtn' className='btn btn-danger' onClick={props.onClickD}>Delete</button>
    <button type='button' id="myBtn" className='btn btn-info' onClick={props.onClickE}>Edit</button> 
    
       
    </div>);
};

const Edit = (props) => {
  return (
    <div className='editarea modal1' id="myModal1">
    <div className="modal-content1">
    <div className="modal-header1">
    <span className="close1" onClick={props.close}>&times;</span>
    <h3>Edit Recipe</h3>
    </div>
    <div className="modal-body1">
    <h5>Recipe</h5>
    <textarea className='tetitle' rows='2' onChange={props.changeTit}>{props.title}</textarea>
    <h5>Ingredients</h5>
    <textarea className='teingredients' rows='2' onChange={props.changeIng}>{props.data}</textarea>
    <br/>
    </div>
    <div className="modal-footer1">
    <button type='button' className='btn btn-primary editsave' onClick={props.save}>Save</button>
    <button type='button' className='btn btn-default editclose' onClick={props.close}>Close</button>
    </div> 
    </div>
    </div>
  );
};

const Add = (props) => {
  return (
    <div className='addButtonArea'>    
    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal" onClick={props.add}>Add Recipe</button>
    <div className="modal fade addarea" id="myModal" role="dialog">
    <div className="modal-dialog">    
    <div className="modal-content">
    <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal" onClick={props.addclose}>&times;</button>
    <h3 className='addrecipe'>Add a Recipe</h3>
    </div>
    <div className="modal-body">
    <h4 className='recip'>Recipe</h4>
    <textarea id='texttitid' className='tetitle' rows='1' cols='50' placeholder="Recipe Name" onChange={props.addtit}></textarea>
    <h5 className='ingre'>Ingredients</h5>
    <textarea id='textingid' className='teingredients' rows='2' cols='50' placeholder="Enter Ingredients,Separated,By Commas"
     onChange={props.adding}></textarea>
    <br/>
    </div>
    <div className="modal-footer">    
    <button type='button' className='btn btn-info' data-dismiss="modal" onClick={props.addsave}>Save</button>
    <button type='button' className='btn btn-default' data-dismiss="modal" onClick={props.addclose}>Close</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

class Box extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      recipes: localdata()
    };    
  }

  handleClick = (e) => {// click on the recipe title to toggle show and hide;
    let x = e.target.nextSibling;
    //let x = $(e.target).parent().children().eq(1);
    //let i = 10+$(e.target).attr('id');
    //console.log(i)
    //$(e.target).next().attr('id', i);
    $(x).toggleClass('ing');
    //$(e.target).parent().toggleClass('del')
  };

  handleClickD = (e) => {//click delete button;
    let h3title = $(e.target).parent().prev().text();//get h3 text;   
    /*data = data.filter((val, ind)=>{
    return val.title!== h3title;
  })*/
   /* let c=[];
    let d=5;
    data.forEach((val, ind)=>{
      c.push(val.title);
      d=c.indexOf(h3title);//get first index of same h3titles if 2 recipe titles are same;
    });
    data.splice(d, 1);*/
    let i = $(e.target).parent().prev().attr('id');
    //console.log(i)
    //$('.del').remove();
    data.splice(i, 1);
    this.setState({recipes: localdata()})  
    $('.ing1').addClass('ing'); 
  };

  handleClickE = (e) => {//click edit button;
    let z = $(e.target).parent().next();
    $(z).css('display', 'block');
    
  };

  handleTextTitle = (e) => {//get textarea title value under edit;
    ti = e.target.value;
    
  };

  handleTextIng = (e) => {//get textarea ingredients value under edit;
    te = e.target.value;
    
  };

  handleSave = (e) => {//click save button under edit;
   /* if(!ti&&!te){//user doesnt change anything and click save;
      ti=$(e.target).parent().parent().children().eq(0).text();//h3 text;
    te=$(e.target).parent().children().eq(4).text();//ingredients text area text;
    }
    else if(!te&&ti){te=$(e.target).parent().children().eq(4).text();}//user only changes title and save; ingredients text area text;
    else if(!ti&&te){ti=$(e.target).parent().parent().children().eq(0).text();}//user only changes ingredients and save;//h3 text;
    
    let s = $(e.target).parent().parent().children().eq(0).text();//show title text; user changes both title and ingredients;//h3 text;*/
    if(!ti&&!te){//user doesnt change anything and click save;
      ti=$(e.target).parent().parent().parent().parent().children().eq(0).text();//h3 text;
    te=$(e.target).parent().prev().children().eq(3).text();//ingredients text area text;
    }
    else if(!te&&ti){te=$(e.target).parent().prev().children().eq(3).text();}//user only changes title and save; ingredients text area text;
    else if(!ti&&te){ti=$(e.target).parent().parent().parent().parent().children().eq(0).text();}//user only changes ingredients and save;//h3 text;
    
    let s = $(e.target).parent().parent().parent().parent().children().eq(0).text();//show title text; user changes both title and ingredients;//h3 text;
    let tearr=te.split(',')//ingredients array;
    let i=5;// title text index;

    data.forEach((val, ind)=>{
      if(val.title===s){i=ind}
    })

    data[i].title=ti;
    data[i].ingredients=tearr;
    //$(e.target).parent().css('display', 'none')
    $('.editarea').css('display', 'none')
    this.setState({recipes: localdata()})

  };

  handleClose = (e) => {//click close button under edit;
    //let c = $(e.target).parent().parent().children().eq(0).text();//get title text from h3 tag;
    let c = $(e.target).parent().parent().parent().parent().children().eq(0).text();//get title text from h3 tag;
    let i =5;
    data.forEach((val, ind)=>{
      if(val.title===c){i=ind}
    })
    
    $(e.target).parent().prev().children().eq(1).val(data[i].title);//change textarea title text;
    $(e.target).parent().prev().children().eq(3).val(data[i].ingredients.join(', '));//change textarea ingredients text;
    ti=data[i].title; 
    te=data[i].ingredients.join(',');
    //$(e.target).parent().css('display', 'none');   
    $('.editarea').css('display', 'none')
  };

  handleAdd = (e) =>{//click add button;
    $('.addarea').css('display', 'block')
  };

  handleAddTitle = (e) =>{//get textarea title text under add button;
    addTit = e.target.value;
  };

  handleAddIng = (e) =>{//get textarea title text under add button;
    addIng = e.target.value;
  };

  handleAddSave = (e) =>{//click save button under add;
    //if(!addTit&&addIng){addTit='Untitled'}
    if(!addTit){addTit='Untitled'}
    let addIngArr = addIng.split(',')
    let addObj = {title: addTit, ingredients: addIngArr};
    data.push(addObj);
    this.setState({recipes: localdata()});
    $('.addarea').css('display', 'none');
    $('#textingid').val('');
    $('#texttitid').val('');
    addIng=''; addTit='';
  };

  handleAddClose = (e) =>{
    $('#textingid').val('');
    $('#texttitid').val('');
    addIng=''; addTit='';
    $('.addarea').css('display', 'none');
  };

  render () {
    let nodes = this.state.recipes.map((val, ind)=>{
           
        return (        
          <div className='area'>
          <h3 className='title' id={ind} onClick={this.handleClick}>
            {val.title}
          </h3>        
         <List 
         name={val.ingredients} 
         onClickD={this.handleClickD}
         onClickE={this.handleClickE}/>
         <Edit title={val.title} 
         data={val.ingredients.join(', ')} 
         changeTit={this.handleTextTitle}
         changeIng={this.handleTextIng}
         save={this.handleSave}
         close={this.handleClose}/>
          </div>                                  
        );      
    });

    return (
      <div>
        <div className='head'>
        <div className='maintitle'>Recipe Box</div>        
        <Add add={this.handleAdd}
      addtit={this.handleAddTitle}
      adding={this.handleAddIng}
      addsave={this.handleAddSave}
      addclose={this.handleAddClose}/> 
        </div>       
        {nodes}       
      </div>
    );    
  }
}

ReactDOM.render(<Box />,
  document.getElementById('app'));

