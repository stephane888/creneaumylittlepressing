<?php

namespace Drupal\creneaumylittlepressing\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\shopify_api_rest\Services\ManageAccessToken;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Component\Serialization\Json;
use Stephane888\DrupalUtility\HttpResponse;
use Stephane888\Debug\ExceptionExtractMessage;

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
    $params = $Request->query->all();
    $configs = $this->config('creneaumylittlepressing.settings')->getRawData();
    //
    $grantOptions = $configs['grant_options'];
    $this->ManageAccessToken->setAppConfig($this->getMergeConf($configs, $params));
    $this->ManageAccessToken->run($Request, $grantOptions);
    $build['content'] = [
      '#theme' => 'creneaumylittlepressing',
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
    $params = $Request->query->all();
    $configs = $this->config('creneaumylittlepressing.settings')->getRawData();
    $this->ManageAccessToken->setAppConfig($this->getMergeConf($configs, $params));
    $grantOptions = $configs['grant_options'];
    $this->ManageAccessToken->SaveAuthorization($Request, $grantOptions);
    // redirection vers app.
    $options = [
      'query' => $params
    ];
    return $this->redirect('creneaumylittlepressing.app', [], $options);
  }
  
  public function ValidationPermissions(Request $Request) {
    $params = $Request->query->all();
    $configs = $this->config('creneaumylittlepressing.settings')->getRawData();
    $this->ManageAccessToken->setAppConfig($this->getMergeConf($configs, $params));
    $grantOptions = $configs['grant_options'];
    $this->ManageAccessToken->SaveAuthorization($Request, $grantOptions);
    //
    $options = [
      'query' => $params
    ];
    return $this->redirect('creneaumylittlepressing.app', [], $options);
  }
  
  public function SaveMetafields(Request $Request) {
    try {
      $params = $Request->query->all();
      $configs = $this->config('creneaumylittlepressing.settings')->getRawData();
      $token = $this->ManageAccessToken->getToken($Request);
      if (empty($token))
        throw new \Exception("Token non definit");
      $configs['token'] = $token;
      //
      $datas = Json::decode($Request->getContent());
      $results = $this->ManageAccessToken->saveMetafields($datas['endPoint'], $datas['metafields'], $this->getMergeConf($configs, $params));
      return HttpResponse::response($results);
    }
    catch (\Exception $e) {
      return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
    }
    catch (\Error $e) {
      return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
    }
  }
  
  /**
   * --
   */
  protected function getMergeConf($configs, $params) {
    foreach ($params as $k => $value) {
      $configs[$k] = $value;
    }
    return $configs;
  }
  
}
