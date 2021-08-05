<div class="table-responsive mb-0 tableGrey" id="table_data">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>description</th>
                    <th>image</th>
                    
                    <th class="minWidthBtn">Action</th>
                </tr>
            </thead>
            <tbody>
            
              @foreach($categories as $category)
                <tr>
                    <th>{{$category->name}}</th>
                    <td>{{$category->description}}</td>
                   
                    
                    <td>
                        <a value="#" class="image-popup-vertical-fit" href="#">
                            <img class="lcnseImage" src="{{ asset('backend_asset/images/'.$category->image) }}" alt='' onerror=this.src="backend_asset/company/images/licenseImg.png" />
                        </a>
                    </td>
                    
                    
                   
                    <td>
                        <div class="dropdown mo-mb-2">
                            <div class="actionDrop">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Action
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/editCategory/{{$category->id}}">Edit</a>
                                   
                                    <a class="dropdown-item device_status" value="#" href="/user/status">Activate</a>

                                    <a class="dropdown-item delete_user" value="/deleteCategory/{{$category->id}}" href="/user/delete">Delete</a>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            
                @endforeach
            </tbody>
        </table>
        @if(count($categories)==0)
        <span style="text-align: center;">
        <h4 style="color:gray;align:center;">No data found</h4>
        </span>
        @endif
        {{$categories->links("pagination::bootstrap-4")}}
    </div>        