<?php

class Home extends Controller
{
  public function index()
  {
    $this->render('home', array(
      'metaTitle' => 'Mohd Sufiyan - Aspiring Full Stack Developer',
      'metaDescription' => 'Need a developer that can handle the full spectrum of your web-based software or app including back-end, front-end and server administration? Hook me up!'
    ));
  }
  
  public function page1()
  {
    $Item = new ItemModel();
    $itemsList = $Item->selectItemsList();
    
    $this->render('page1', array(
      'metaTitle' => 'Page 1',
      'metaDescription' => 'Thank you for using php-mvc framework by mosufy',
      'page' => 'page1',
      'itemsList' => $itemsList
    ));
  }
	
  public function page2()
  {
    $this->render('page2', array(
      'metaTitle' => 'Page 2',
      'metaDescription' => 'Thank you for using php-mvc framework by mosufy',
      'page' => 'page2'
    ));
  }
	
  public function page3()
  {		
    $this->render('page3', array(
      'metaTitle' => 'Page 3',
      'metaDescription' => 'Thank you for using php-mvc framework by mosufy',
      'page' => 'page3',
    ));
  }
	
  public function page4()
  {		
    $this->render('page4', array(
      'metaTitle' => 'Page 4',
      'metaDescription' => 'Thank you for using php-mvc framework by mosufy',
      'page' => 'page4',
    ));
  }
	
  /**
  * PAGE: item
  * This method handles what happens when you move to http://yourproject/{item}
  * This method was received from index() to check if the {item} really exists
  * Only then should you display the item. Otherwise, mark it as an error page
  */
  private function displayItem($item)
  {
    $Item = new ItemModel();
    $itemData = $Item->selectItemData($item);
    
    if (!$itemData) $this->displayError404();
    
    $this->render('item', array(
      'metaTitle' => 'Hello World',
      'metaDescription' => 'Thank you for using php-mvc framework by mosufy',
      'itemData' => $itemData
    ));
  }
}