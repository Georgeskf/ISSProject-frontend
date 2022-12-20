import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimeIcons} from 'primeng/api';
import { AuthenticateService } from 'src/app/_guards/authenticate.service';

import { User } from 'src/app/_shared/models/user';
import { Book } from './booksService/book';
import { BookService } from './booksService/book.service'

@Component({
  providers: [ConfirmationService, MessageService],

  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  Books: Book[] = [];
  Book: Book = new Book;
  
  mail!: SafeResourceUrl;
  addBookdialog!: Boolean;
  submitted!: Boolean;
  uploadedFiles!: any;
  currentUser: User = new User();
  isAuthenticated = false;
  bookName!: String;
  bookType!: String;
  isLibrerian = false;

  filterList = {
    country: ["country"],
    specialty: ["Orthopaedic Surgeons", "Pain Medicine Physicians", "Neuro Surgeon", "Physical Medicine And Rehabilitation", "Scientists", "Fellows And Medical Students", "Researchers", "Chiropractors", "Physical Therapist Occupational Therapist", "Allied Health Professionals"],
  };
  copydata!: any;

  filterChange($event: any) {
    this.Books = this.copydata;
    this.bookName = $event.appliedFilterValues.bookName;
    this.bookType = $event.appliedFilterValues.bookType;
    if (this.bookName) {
      this.Books = this.Books.filter(item => item.BookName === this.bookName);
    }
    if (this.bookType) {
      this.Books = this.Books.filter(item => item.BookType === this.bookType);
    }
  }

  constructor(
    private _authenticateService: AuthenticateService,private BookService: BookService, private _confirmationService: ConfirmationService,private _messageService: MessageService) { }
    get isLogedIn() {
      return this._authenticateService.isAuthenticated();
    }
    islib() {
      const result =this._authenticateService.getType();
      if (result == 'Librerian') {
        this.isLibrerian = true;
      }
      console.log("aaa",result)
    }
  addBook() {
    this.islib();
    this.Book = new Book();
    this.addBookdialog = true;

  }

  apply(email: String) {
    if (email) {
      window.open(`mailto:${email}`, '_blank');
    }
  }

  async save() {
    console.log(1)
    this.submitted = true;
    if (this.Book.BookName.trim()) {
      this.addBookdialog = false;

      this._confirmationService.confirm({
        message: 'Are you sure you want sure to add this Book?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: async () => {
          const t = await this.BookService.addBook(this.Book).toPromise();
          if (t) {
            this.addBookdialog = false;
            this.submitted = false;
            this.Book = new Book();
          }
          window.location.reload()
        }

      });
    } else {
      return;
    }

  }

  hideDialog() {
    this.addBookdialog = false;
    this.Book = new Book();
    this.submitted = false;
    this.uploadedFiles = undefined;
  }
  // async getUser() {
  //   if (this._authenticateService.isAuthenticated()) {
  //     const t = await this._currentUserService.userById().toPromise();
  //     if (t.result) {
  //       this.currentUser = t.body;
  //     } else {
  //       this.currentUser = new User();
  //     }
  //   } else {
  //     this.currentUser = new User();
  //   }
  // }
   async getBook() {
    console.log(7)
    const t = await  this.BookService.getBooks().toPromise();
    console.log(8)
    console.group("22",t)

    if (t ) {
      this.Books = t.body;
      console.log("ast",t.body)

    } else {
      this.Books = [];
    }

  }
  
  Delete(id:number){
    console.log(1)
    this.submitted = true;
      this._confirmationService.confirm({
        message: 'Are you sure you want sure to delete this Book?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: async () => {

          const t = await this.BookService.deleteBooks(id).toPromise();
          
          window.location.reload()
        }

      });
    

  }

  
  onUpload(event: any) {
    // for (let file of event.files) {
    //   this.uploadedFiles = file;
    // }
    // this._messageService.clear();
    // this._messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
  onClear(e: any) {
    this.uploadedFiles = undefined;
  }

  async ngOnInit(): Promise<void> {
    // if (this._authenticateService.isAuthenticated()) {
    //   // await this.getUser();
    //   this.isAuthenticated = true;
    // }
    
      
    this.islib();
    await this.getBook();
    console.log("11",this.Books)

  }

}

