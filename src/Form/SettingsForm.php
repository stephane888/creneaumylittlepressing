<?php

namespace Drupal\creneaumylittlepressing\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\shopify_api_rest\ShopifyApiRest;

/**
 * Configure creneaumylittlepressing settings for this site.
 */
class SettingsForm extends ConfigFormBase {
  
  /**
   *
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'creneaumylittlepressing_settings';
  }
  
  /**
   *
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'creneaumylittlepressing.settings'
    ];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('creneaumylittlepressing.settings');
    $form['client_id'] = [
      '#type' => 'textfield',
      '#title' => $this->t('ID client'),
      '#default_value' => $config->get('client_id'),
      '#required' => true
    ];
    $form['client_secret'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Secret client'),
      '#default_value' => $config->get('client_secret'),
      '#required' => true
    ];
    $form['redirect_uri'] = [
      '#type' => 'textfield',
      '#title' => $this->t('redirect_uri'),
      '#default_value' => $config->get('redirect_uri'),
      '#required' => true
    ];
    $form['grant_options'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t('select grant options'),
      '#default_value' => !empty($config->get('grant_options')) ? $config->get('grant_options') : [],
      '#options' => ShopifyApiRest::listGrantOption(),
      '#required' => false
    ];
    return parent::buildForm($form, $form_state);
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    // if ($form_state->getValue('example') != 'example') {
    // $form_state->setErrorByName('example', $this->t('The value is not
    // correct.'));
    // }
    parent::validateForm($form, $form_state);
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $editConfig = $this->config('creneaumylittlepressing.settings');
    //
    $editConfig->set('client_id', $form_state->getValue('client_id'));
    $editConfig->set('client_secret', $form_state->getValue('client_secret'));
    $editConfig->set('redirect_uri', $form_state->getValue('redirect_uri'));
    $editConfig->set('grant_options', $form_state->getValue('grant_options'));
    $editConfig->save();
    //
    parent::submitForm($form, $form_state);
  }
  
}
