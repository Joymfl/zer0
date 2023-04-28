use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod test_web_app {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let tweet_account = &mut ctx.accounts.tweet;
        tweet_account.body = "Hello World".to_string();
        tweet_account.title = "Init".to_string();
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub funder: Signer<'info>,
    #[account(init, space= Tweet::MIN_DATA_SIZE, seeds=[funder.key().as_ref()],bump, payer = funder)]
    pub tweet: Account<'info, Tweet>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Tweet {
    pub title: String,
    pub body: String,
    pub count: u64,
}

impl Tweet {
    const MIN_DATA_SIZE: usize = 8 + 12 + 12 + 8;
}
