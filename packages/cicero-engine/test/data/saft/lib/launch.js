'use strict';

/*eslint-disable no-unused-vars*/
/*eslint-disable no-undef*/
/*eslint-disable no-var*/

/**
 * Execute the smart clause
 * @param {Context} context - the Accord context
 * @param {org.accordproject.saft.Launch} context.request - the incoming request
 * @param {org.accordproject.saft.Payout} context.response - the response
 * @param {Event} context.emit - the emitted events
 * @AccordClauseLogic
 */
function onLaunch(context) {
    logger.info(context);
    logger.info('Launching SAFT');
    var req = context.request;
    var res = context.response;
    var contract = context.contract;
    res.tokenAmount = 100;
    res.tokenAddress = contract.purchaser;
}

