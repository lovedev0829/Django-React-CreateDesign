from django.core.management import call_command
from django.core.management.base import BaseCommand
from stripe.error import AuthenticationError

from apps.utils.billing import create_stripe_api_keys_if_necessary


class Command(BaseCommand):
    help = "Bootstraps your Stripe subscriptions"

    def handle(self, **options):
        try:
            if create_stripe_api_keys_if_necessary():
                print("Added Stripe secret key to the database...")
            print("Syncing products and plans from Stripe")
            call_command("djstripe_sync_models", "price")
        except AuthenticationError:
            print(
                "\n======== ERROR ==========\n"
                "Failed to authenticate with Stripe! Check your Stripe key settings.\n"
                "More info: https://docs.saaspegasus.com/subscriptions.html#getting-started"
            )
