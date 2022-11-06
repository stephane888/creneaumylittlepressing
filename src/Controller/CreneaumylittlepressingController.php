<?php

namespace Drupal\creneaumylittlepressing\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\shopify_api_rest\Services\ManageAccessToken;
use Symfony\Component\HttpFoundation\Request;

/**
 * Returns responses for creneaumylittlepressing routes.
 */
class CreneaumylittlepressingController extends ControllerBase {
  
  /**
   *
   * @var ManageAccessToken
   */
  protected $ManageAccessToken;
  
  /**
   *
   * @param ManageAccessToken $ManageAccessToken
   */
  function __construct(ManageAccessToken $ManageAccessToken) {
    $this->ManageAccessToken = $ManageAccessToken;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('shopify_api_rest.manage_access_token'));
  }
  
  /**
   * Builds the response.
   * 1 : La premiere requete ( Generalement "demande d'installation" ) arrive.
   * On verifie si le client est deja enregistrée.
   * 1: 1 si nouveau client: On doit le rediriger vers la page d'authorisation
   * en precissant l'url de retour.
   * 1: 2 Shopify redirigera vers la page de redirect avec un
   * code_dautorisation.( pour determiner si
   * l'utilisateur a authorisé ou l'application).
   * 1: 3 On effectue une requete pour avoir un token_access en utilisant le
   * code_autorisation.
   */
  public function AppCreneaux(Request $Request) {
    $configs = $this->config('creneaumylittlepressing.settings')->getRawData();
    //
    $grantOptions = $configs['grant_options'];
    $this->ManageAccessToken->setAppConfig($configs);
    $this->ManageAccessToken->run($Request, $grantOptions);
    $build['content'] = [
      '#theme' => 'Creneaumylittlepressing',
      '#title' => "Configuration de lapplication creneau",
      '#configsCreneau' => [],
      '#attached' => [
        'library' => [
          'creneaumylittlepressing/app'
        ]
      ]
    ];
    $build['content']['#attached']['drupalSettings']['creneaumylittlepressing'] = [
      'creneau_configs' => [],
      'creneau_types' => [],
      "creneau_filters" => []
    ];
    return $build;
  }
  
  /**
   *
   * @return string[]|\Drupal\Core\StringTranslation\TranslatableMarkup[]
   */
  public function shopify() {
    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!')
    ];
    return $build;
  }
  
  /**
   *
   * @return string[]|\Drupal\Core\StringTranslation\TranslatableMarkup[]
   */
  public function Valid(Request $Request) {
    $configs = $this->config('creneaumylittlepressing.settings')->getRawData();
    $this->ManageAccessToken->setAppConfig($configs);
    $grantOptions = $configs['grant_options'];
    $this->ManageAccessToken->SaveAuthorization($Request, $grantOptions);
    // redirection vers app.
    return $build;
  }
  
}
