<?php

namespace Drupal\creneaumylittlepressing\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for creneaumylittlepressing routes.
 */
class CreneaumylittlepressingController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function AppCreneaux() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];
    return $build;
  }

  public function shopify(){
    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];    
    return $build;
  }
  
  public function Valid(){
    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];    
    return $build;
  }
}
