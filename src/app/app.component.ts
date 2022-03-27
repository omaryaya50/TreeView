import { Component, NgZone, VERSION } from '@angular/core';
import { IActionMapping, ITreeOptions, KEYS, TreeModel, TreeNode, TREE_ACTIONS } from '@circlon/angular-tree-component';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import User from './task/Users.json' ;

interface USERS {
  code: string;
  name: string;
  imagePath:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Users: USERS[] = User;
  constructor(private ngZone: NgZone){
    console.log(this.Users);
    
  }
/*   public data: any[] = [{
    text: 'ahmed',
    items: [
        {
            text: 'ali',
            items: [
                { text: 'ibrahim' , items: [
                  {text:'hany'},{text:'mohamed'} ] },
                
            ]
        },
        {
            text: ' abdullah ',
            items: [
                { text: 'mahmoud' ,item:[{text:'samir'}] },
                { text: 'samy',item:[{text:'khalid'}]   }
            ]
        },
        
    ]
}]; */

name = "Angular " + VERSION.major;
  selectedNodeSet = new Set([6]);
  nodes = [
    {
      id: 1,
      name: "ahmed",
      children: [{ id: 2, name: "ali" ,children:[{id: 3, name: "ibrahim" ,children:[{id: 4, name: "hany" },{id: 5, name: "mohamed" }]}] }, { id: 11, name: "abdullah" , children:[{id: 12, name: "mahmoud" ,children:[{id: 12, name: "samir" }]},{id: 13, name: "samy", children:[{id: 12, name: "khaled"} ]}] }]
    },
   
  ];
  actionMapping: IActionMapping = {
    mouse: {
      contextMenu: (tree, node, $event) => {
        $event.preventDefault();
      },
      checkboxClick: (tree, node: TreeNode, $event) => {
        $event.stopPropagation();
        node.toggleSelected();
        if (this.selectedNodeSet.has(node.id)) {
        }
      },
      dblClick: (tree, node, $event) => {
        if (node.hasChildren) {
          TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      click: (tree: TreeModel, node: TreeNode, $event) => {},
      expanderClick: (tree, node: TreeNode, $event) => {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    keys: {
      [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
    }
  };
  public treeOptions: ITreeOptions = {
    actionMapping: this.actionMapping,
    useCheckbox: true
  };


  update() {
    const temp = JSON.parse(JSON.stringify(this.nodes));
    temp[0].name = 'after update root1'
    this.nodes = temp;
  }
}
