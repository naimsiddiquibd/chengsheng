import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import TopBar from '../../Shared/TopBar/TopBar';
import './Products.css'

const Products = () => {
    return (
        <>
        <TopBar></TopBar>
        <Navigation></Navigation>
        <div class="mt-5 pt-5 ml-3">
            <nav class="mt-5 navbar navbar-expand-sm navbar-light bg-white border-bottom">
            <a class="navbar-brand ml-2 font-weight-bold" href="#">PRODUCTS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation"> 
                <span class="navbar-toggler-icon"></span> 
            </button>  
        </nav>
<div class="filter">
    <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span class="fa fa-filter pl-1"></span></button>
</div>
<div id="mobile-filter">
    <div>
        <h6 class="p-1 border-bottom">Home Furniture</h6>
        <ul class="list-group">

<div class="btn-group mb-2">
        <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Net/Mesh
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Fish Fry Sieve</button>
            <button class="dropdown-item" type="button">Nylon Filter Must</button>
            <button class="dropdown-item" type="button">HDPE Screen</button>
        </div>
</div>
<div class="btn-group mb-2">
        <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pond System
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Fish Feeder</button>
            <button class="dropdown-item" type="button">Pumps</button>
            <button class="dropdown-item" type="button">Blower</button>
            <button class="dropdown-item" type="button">Aerator</button>
            <button class="dropdown-item" type="button">Tube Aerator House</button>
            <button class="dropdown-item" type="button">Tube Aerator House</button>
            <button class="dropdown-item" type="button">Polyethylene Sheet/PE Film</button>
        </div>
</div>
<div class="btn-group mb-2">
        <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Feed processing
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Feed Mixer</button>
            <button class="dropdown-item" type="button">Feed Pallet</button>
            <button class="dropdown-item" type="button">Feed Extruder</button>
        </div>
</div>
<div class="btn-group mb-2">
        <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Outboard Engine
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Outboard Engine</button>
            <button class="dropdown-item" type="button">Boat</button>
        </div>
</div>
<div class="btn-group mb-2">
        <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Hardware
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Water Pants</button>
            <button class="dropdown-item" type="button">Sprayers</button>
            <button class="dropdown-item" type="button">Electrical</button>
            <button class="dropdown-item" type="button">Hose/Pipe</button>
            <button class="dropdown-item" type="button">Tank</button>
        </div>
</div>
<div class="btn-group mb-2">
        <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Right-aligned menu
        </button>
        <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Action</button>
            <button class="dropdown-item" type="button">Another action</button>
            <button class="dropdown-item" type="button">Something else here</button>
        </div>
</div>
</ul>
    </div>
   
    
</div>
<section id="sidebar">
  
    <div>
        <h6 class="p-1">Categories</h6>
        <ul class="list-group">

        <div class="btn-group mb-2">
                <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Net/Mesh
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">Fish Fry Sieve</button>
                    <button class="dropdown-item" type="button">Nylon Filter Must</button>
                    <button class="dropdown-item" type="button">HDPE Screen</button>
                </div>
        </div>
        <div class="btn-group mb-2">
                <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pond System
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">Fish Feeder</button>
                    <button class="dropdown-item" type="button">Pumps</button>
                    <button class="dropdown-item" type="button">Blower</button>
                    <button class="dropdown-item" type="button">Aerator</button>
                    <button class="dropdown-item" type="button">Tube Aerator House</button>
                    <button class="dropdown-item" type="button">Tube Aerator House</button>
                    <button class="dropdown-item" type="button">Polyethylene Sheet/PE Film</button>
                </div>
        </div>
        <div class="btn-group mb-2">
                <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Feed processing
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">Feed Mixer</button>
                    <button class="dropdown-item" type="button">Feed Pallet</button>
                    <button class="dropdown-item" type="button">Feed Extruder</button>
                </div>
        </div>
        <div class="btn-group mb-2">
                <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Outboard Engine
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">Outboard Engine</button>
                    <button class="dropdown-item" type="button">Boat</button>
                </div>
        </div>
        <div class="btn-group mb-2">
                <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Hardware
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">Water Pants</button>
                    <button class="dropdown-item" type="button">Sprayers</button>
                    <button class="dropdown-item" type="button">Electrical</button>
                    <button class="dropdown-item" type="button">Hose/Pipe</button>
                    <button class="dropdown-item" type="button">Tank</button>
                </div>
        </div>
        <div class="btn-group mb-2">
                <button type="button" class="btn btn-secondary2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Right-aligned menu
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">Another action</button>
                    <button class="dropdown-item" type="button">Something else here</button>
                </div>
        </div>
        </ul>
    </div>

    <div class="mt-4">
        <div class="mb-3">
             <h6>Message</h6>
        </div>
        
        <form>
  <div class="form-group row">
    <div class="col-sm-12">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-12">
      <input type="text" class="form-control" id="inputPassword3" placeholder="Subject"/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-12">
      <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write here..." rows="3"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-12">
      <button type="submit" class="btn btn-secondary2">Submit</button>
    </div>
  </div>
</form>
    </div>

</section>
<section id="products">
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Wooden chair with legs</p>
                </div>
              </div>
        </div>
        <div class="col-lg-3 offset-lg-0 col-sm-4 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Ugly chair and table set</p>    
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Leather Lounger</p>    
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1537182534312-f945134cce34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Tree Trunk table set</p>     
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/3230274/pexels-photo-3230274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Red Leather Bar Stool</p>       
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/3773571/pexels-photo-3773571.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Modern Dining Table</p>      
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 col-11 offset-sm-0 offset-1">
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">Boring Dining Table</p>    
                </div>
              </div>
        </div>
        <div class="col-lg-3 col-sm-4 offset-lg-0 offset-sm-2 col-11 offset-1">
            <div class="card">
                <img class="card-img-top" src="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
                <div class="card-body">
                  <p class="card-text">An Ugly Office</p>    
                </div>
            </div>
        </div>
    </div>
</div>
</section>
        </div>
        </>
    );
};

export default Products;