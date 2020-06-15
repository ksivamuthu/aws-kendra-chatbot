import logging
import json
import helpers
import config
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def handler(event, context):
    session_attributes = event.get('sessionAttributes', None)     
    query_string = ""
    if event.get('inputTranscript', None) is not None:
        query_string += event['inputTranscript']
        
    kendra_response = helpers.get_kendra_answer(query_string)
    if kendra_response is None:
        response = "Sorry, I was not able to understand your question."
        return helpers.close(session_attributes, 'Fulfilled', {'contentType': 'CustomPayload','content': response})
    else:
        logger.info('<<help_desk_bot>> "fallback_intent_handler(): kendra_response = %s', kendra_response)
        return helpers.close(session_attributes, 'Fulfilled', {'contentType': 'CustomPayload','content': kendra_response})