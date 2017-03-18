import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { GlobalEventEmitter } from '../global-events-manager.service';

declare var jQuery:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [SearchService]
})
export class NavbarComponent implements OnInit {

  searchWord: string = '';

  constructor(private searchService: SearchService, private router: Router, private globalEventEmitter: GlobalEventEmitter) { }

  ngOnInit() {

    // Highlight the top nav as scrolling occurs
    jQuery('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    jQuery('.navbar-collapse ul li a').click(function(){
            jQuery('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    jQuery('#mainNav').affix({
        offset: {
            top: 100
        }
    })

  }

  search():void {
      this.searchService.setCurrentWords(this.searchWord);
      this.globalEventEmitter.currentWords.emit(this.searchWord);
      this.searchService.updateSearch();
      this.router.navigate(['/busca']);
  }

}
