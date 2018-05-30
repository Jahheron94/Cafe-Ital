import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

class Juice {
  name: string;
  price: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public active = true;
  itemCount = 3;
  public selectedItem = {
    name: '',
    price: '$8.00'

  };
  public newJuice = new Juice;

  public cart = [];
  closeResult: string;


  constructor(private modalService: NgbModal) {}

// // Store
// localStorage.setItem("juices", "$8.00");
// // Retrieve
// document.getElementById("juices").innerHTML = localStorage.getItem("$8.00");


  ngOnInit() {
  }

  btnClick = function () {
    this.router.navigateByUrl('/user');
};


  open(content, item, price ) {
    this.selectedItem.price = price;
    this.selectedItem.name = item;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
